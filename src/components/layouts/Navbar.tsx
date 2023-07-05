import React, { ReactNode, useState } from "react";
import { Link, NavLink, useMatch } from "react-router-dom";
import "./Navbar.scss";

interface Props {
  className: string;
}
interface NavItemProps {
  to: string;
  children: ReactNode;
}

const NavItem = ({ to, children }: NavItemProps) => {
  const match = useMatch(to);
  const activeClass = match ? "text-white" : "";

  return (
    <li>
      <NavLink to={to} className={`${activeClass}`}>
        {children}
      </NavLink>
    </li>
  );
};

const Navbar = ({ className }: Props) => {
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`navbar ${className}`}>
      <div className="navbar-start">
        <Link to={"/"} className="btn btn-ghost normal-case text-xl">
          GHL Api v.1
        </Link>
      </div>
      <div id="navbarNav" className="navber-end  hidden sm:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">
          {/* <NavItem to="/">Home</NavItem> */}
          <NavItem to="/contacts">Contacts</NavItem>
          <NavItem to="/users">Users</NavItem>
          <NavItem to="/appointments">Appointments</NavItem>
          <NavItem to="/slots">Slots</NavItem>
          <NavItem to="/rtk">RTK Test</NavItem>
          {/* <NavItem to="/iframe">Responsive</NavItem> */}
        </ul>
      </div>
      <div className="navbar-end  sm:hidden">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52"
            style={{ left: "-155px" }}
          >
            <li>
              <Link to={"/users"}>Users</Link>
            </li>
            <li>
              <Link to={"/contacts"}>Contacts</Link>
            </li>
            <li>
              <Link to={"/appointments"}>Appointments</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-end hidden lg:flex">
        <Link to={"/demo"} className="btn">
          Demo
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
