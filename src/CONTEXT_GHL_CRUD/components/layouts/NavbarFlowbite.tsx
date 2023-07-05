import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";

export default function NavbarWithDropdown() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href={"/"}>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          GHL Api v.1
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {/* <Navbar.Link active href="#">
          <p>Home</p>
        </Navbar.Link> */}
        <NavLink to={"/"}>Contacts</NavLink>
        <NavLink to={"/demo"}>Appointments</NavLink>
        <NavLink to={"/page-one"}>Users</NavLink>
        <NavLink to={"/page-two"}>About</NavLink>

        {/* <Navbar.Link href="#">Contact</Navbar.Link> */}
      </Navbar.Collapse>
    </Navbar>
  );
}
