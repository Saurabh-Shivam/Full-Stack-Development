import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-full h-24 p-4 bg-black">
      {/* Logo */}
      <div>
        <Link to="/">
          <img
            className="w-28 rounded-md"
            src={logo}
            alt="logo"
            loading="lazy"
          />
        </Link>
      </div>
      {/* Navigation Links */}
      <nav className="mr-4 p-4 w-[30%]">
        <ul className="flex flex-wrap justify-evenly text-lg text-white">
          <li>
            <NavLink
              to="/comics"
              className="hover:text-red-400 transition duration-300"
            >
              Comics
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/series"
              className="hover:text-red-400 transition duration-300"
            >
              Series
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/characters"
              className="hover:text-red-400 transition duration-300"
            >
              Characters
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              className="hover:text-red-400 transition duration-300"
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="hover:text-red-400 transition duration-300"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
