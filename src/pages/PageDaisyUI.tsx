import React from "react";
import { Container, Row, Box } from "../components/layouts";

function PageTwo() {
  return (
    <Container className={""} FULL={false} pageTitle={"PageTwo"}>
      <Row className={"prose text-center"}>
        <h3>Testing Daisy UI Buttons</h3>
        <Box className={"grid gap-2"}>
          <button className="btn">Button</button>
          <button className="btn btn-primary">Button</button>
          <button className="btn btn-secondary">Button</button>
          <button className="btn btn-accent">Button</button>
          <button className="btn btn-ghost">Button</button>
          <button className="btn btn-link">Button</button>
        </Box>
      </Row>
      <Row className={"prose text-center"}>
        <h3>Testing Daisy UI Buttons</h3>
        <Box className={"grid gap-2 grid-auto-fit"}>
          <button className="btn btn-outline">Button</button>
          <button className="btn btn-outline btn-primary">Button</button>
          <button className="btn btn-outline btn-secondary">Button</button>
          <button className="btn btn-outline btn-accent">Button</button>
        </Box>
      </Row>
      <Row className={"prose text-center"}>
        <h3>Testing Daisy UI Modal</h3>
        {/* The button to open modal */}
        <label htmlFor="my-modal" className="btn">
          open modal
        </label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">
              Congratulations random Internet user!
            </h3>
            <p className="py-4">
              You've been selected for a chance to get one year of subscription
              to use Wikipedia for free!
            </p>
            <div className="modal-action">
              <label htmlFor="my-modal" className="btn">
                Yay!
              </label>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
}

export default PageTwo;
