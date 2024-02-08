import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  return (
    <div className="flex justify-between w-[100%] h-24 p-4 bg-black m-0">
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
      <nav className="border-2 border-black mr-4 p-4 w-[30%]">
        <ul className="flex flex-wrap justify-evenly text-lg text-white">
          <li className="hover:text-red-400 transition duration-300 ">
            <NavLink to="/comics">Comics</NavLink>
          </li>
          <li className="hover:text-red-400 transition duration-300 ">
            <NavLink to="/series">Series</NavLink>
          </li>
          <li className="hover:text-red-400 transition duration-300 ">
            <NavLink to="/characters">Characters</NavLink>
          </li>
          <li className="hover:text-red-400 transition duration-300 ">
            <NavLink to="/events">Events</NavLink>
          </li>
          <li className="hover:text-red-400 transition duration-300">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
