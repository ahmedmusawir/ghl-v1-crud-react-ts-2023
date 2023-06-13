import { Container, Row, Box } from "../components/layouts";
import "./Home.scss";

const Page = () => {
  return (
    <Container className={""} FULL={false} pageTitle={"Home"}>
      <Row className={"prose"}>
        <h1 className="h1">This could be a starting point ...</h1>
        <h2 className="h2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit
        </h2>
      </Row>
    </Container>
  );
};

export default Page;
