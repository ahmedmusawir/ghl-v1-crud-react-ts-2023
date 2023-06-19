import { createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import NotFoundPage from "./pages/NotFoundPage";
import IframeTestPage from "./pages/IframePage";
import ContactsGHLPage from "./pages/ContactsGHLPage";
import AppointmentsGHLPage from "./pages/AppointmentsGHLPage";
import UsersGHLPage from "./pages/UsersGHLPage";
import Demo from "./pages/Demo";
import UserDetails from "./components/UserDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: "iframe", element: <IframeTestPage /> },
      { path: "contacts", element: <ContactsGHLPage /> },
      { path: "appointments", element: <AppointmentsGHLPage /> },
      {
        path: "users",
        element: <UsersGHLPage />,
        children: [{ path: ":id", element: <UserDetails /> }],
      },
      { path: "demo", element: <Demo /> },
    ],
  },
]);

export default router;
