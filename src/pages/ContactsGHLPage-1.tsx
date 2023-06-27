import { Outlet } from "react-router-dom";
import ContactsList from "../components/ContactsList";
import { Container, Row, Box } from "../components/layouts";
import Spinner from "../components/ui-ux/Spinner";
import useContacts from "../hooks/useContacts";
import ContactInsert from "../components/ContactInsert";
import { animated, useSpring } from "react-spring";
import { useState } from "react";

const ContactsGHLPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data, isLoading, error } = useContacts();
  const contacts = data?.contacts;
  // console.log(contacts);

  const styles = useSpring({
    from: { opacity: 0, marginTop: -500 },
    to: { opacity: 1, marginTop: 0 },
  });

  if (isLoading) return <Spinner />;

  if (error) return <h1>A Moose error has occured! </h1>;

  const openInsertContact = () => {
    // console.log("Open Insert");
    setIsOpen((prev) => prev !== true);
  };

  return (
    <Container className={""} FULL={false} pageTitle={"Contacts"}>
      <Row className={"prose flex justify-between"}>
        <div className="header-text">
          <h1 className="h1">GHL Contacts</h1>
          <h4 className="h2">REST API v.1</h4>
        </div>
        <button
          className="btn btn-primary my-5 btn-wide btn-lg"
          type="button"
          onClick={openInsertContact}
        >
          {isOpen ? "Close Form" : "Add Contact"}
        </button>
      </Row>
      {/* <Row className={isOpen ? "prose max-w-none" : "prose max-w-none hidden"}> */}
      <animated.div style={styles} className={isOpen ? "" : "hidden"}>
        {/* <Row className={`prose max-w-none ${isOpen ? "" : "hidden"}`}> */}
        <Row className={`prose max-w-none`}>
          <h2 className="h1">Insert Contacts</h2>
          <hr />
          <Box className="card-normal bg-base-100 shadow-xl px-10">
            <ContactInsert />
          </Box>
        </Row>
      </animated.div>
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
