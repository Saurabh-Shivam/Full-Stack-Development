import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  return (
    <div>
      {/* Logo */}
      <div>
        <Link to="/">
          <img width={80} height={60} src={logo} alt="logo" loading="lazy" />
        </Link>
      </div>
      {/* Navigation Links */}
      <nav>
        <ul>
          <li>
            <NavLink to="/comics">Comics</NavLink>
          </li>
          <li>
            <NavLink to="/series">Series</NavLink>
          </li>
          <li>
            <NavLink to="/characters">Characters</NavLink>
          </li>
          <li>
            <NavLink to="/events">Events</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
