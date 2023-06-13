import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

interface Props {
  className: string;
}

const Navbar = ({ className }: Props) => {
  return (
    <div className={`navbar ${className}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to={"/page-one"}>Page One</Link>
            </li>
            <li>
              <Link to={"/page-two"}>Page Two</Link>
            </li>
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost normal-case text-xl">
          GHL Api v.1
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="">
            <Link className="" to={"/contacts"}>
              Contacts
            </Link>
          </li>
          <li>
            <Link to={"/appointments"}>Appointments</Link>
          </li>
          <li>
            <Link to={"/users"}>Users</Link>
          </li>
          {/* <li>
            <Link to={"/send-mail"}>EmailJS</Link>
          </li> */}
        </ul>
      </div>
      <div className="navbar-end">
        <Link to={"/demo"} className="btn">
          Demo
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
