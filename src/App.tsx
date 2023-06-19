import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import {
  Container,
  Footer,
  Footerbar,
  Header,
  Layout,
  Main,
} from "./components/layouts";
import AppointmentsGHLPage from "./pages/AppointmentsGHLPage";
import ContactsGHLPage from "./pages/ContactsGHLPage";
import Demo from "./pages/Demo";
import Home from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import UsersGHLPage from "./pages/UsersGHLPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Header className={"bg-gray-100"}>
            <Container
              pageTitle="React TS Starter"
              FULL={false}
              className={"flex justify-center"}
            >
              {/* <Navbar className={"w-11/12 xl:w-4/5"} /> */}
              {/* <NavbarFlowbite /> */}
            </Container>
          </Header>
          <Main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/demo" element={<Demo />} />
              <Route path="/contacts" element={<ContactsGHLPage />} />
              <Route path="/appointments" element={<AppointmentsGHLPage />} />
              <Route path="/users" element={<UsersGHLPage />} />
              <Route path="/*" element={<NotFoundPage />} />
            </Routes>
          </Main>
          <Footer className={"bg-gray-200"}>
            <Footerbar />
          </Footer>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
