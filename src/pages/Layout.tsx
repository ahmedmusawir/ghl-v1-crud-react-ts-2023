import { Outlet } from "react-router-dom";
import { Box, Navbar } from "../components/layouts";

const Layout = () => {
  return (
    <>
      <Navbar className="bg-gray-200" />
      <Box>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
