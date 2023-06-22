import React from "react";
import { Container, Row, Box } from "../components/layouts";

const HomePage = () => {
  return (
    <Container className={""} FULL={false} pageTitle={"Home"}>
      <Row className={"prose max-w-none"}>
        <h1 className="h1">This could be a starting point ...</h1>
        <h2 className="h2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit
        </h2>
        <h3 className="h3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit
        </h3>
        <p>
          Possimus et, ex eum rem mollitia totam eius ad, sapiente eos maiores
          voluptatum, explicabo harum quos dolores nemo eaque reprehenderit quo.
          Iure. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Possimus et, ex eum rem mollitia totam eius ad, sapiente eos maiores
          voluptatum, explicabo harum quos dolores nemo eaque reprehenderit quo.
          Iure.Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Possimus et, ex eum rem mollitia totam eius ad, sapiente eos maiores
          voluptatum, explicabo harum quos dolores nemo eaque reprehenderit quo.
          Iure.Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Possimus et, ex eum rem mollitia totam eius ad, sapiente eos maiores
          voluptatum, explicabo harum quos dolores nemo eaque reprehenderit quo.
          Iure.Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Possimus et, ex eum rem mollitia totam eius ad, sapiente eos maiores
          voluptatum, explicabo harum quos dolores nemo eaque reprehenderit quo.
          Iure.
        </p>
      </Row>
      <Row className={"prose flex flex-wrap justify-around max-w-none"}>
        {/* p-5 CLASS WILL BREAK EVERYTHING */}
        <Box className={"p-3 w-[32rem]"}>
          <h3>This is box one w/ prose class</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
            explicabo expedita neque voluptas exercitationem eum quia, nostrum
            inventore itaque accusamus doloremque. Ipsam ratione repellendus
            nulla libero doloremque non commodi tempore.
          </p>
        </Box>
        <Box className={"p-3 w-[32rem]"}>
          <h3>This is box two w/ prose class</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
            explicabo expedita neque voluptas exercitationem eum quia, nostrum
            inventore itaque accusamus doloremque. Ipsam ratione repellendus
            nulla libero doloremque non commodi tempore.
          </p>
        </Box>
      </Row>
      <Row className={"prose-2xl grid gap-3 grid-auto-fit"}>
        {/* p-5 CLASS WILL BREAK EVERYTHING */}
        <Box className={"p-4"}>
          <h4>This is 2nd Box One w/ prose 2xl class</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
            et, ex eum rem mollitia totam eius ad, sapiente eos maiores
            voluptatum, explicabo harum quos dolores nemo eaque reprehenderit
            quo. Iure.
          </p>
        </Box>
        <Box className={"p-4"}>
          <h4>This is 2nd Box Two w/ prose 2xl class</h4>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
            et, ex eum rem mollitia totam eius ad, sapiente eos maiores
            voluptatum, explicabo harum quos dolores nemo eaque reprehenderit
            quo. Iure.
          </p>
        </Box>
      </Row>
    </Container>
  );
};

export default HomePage;
