import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Main Course</Link>
      <ul>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="register">Sign Up</Link>
        </li>
        <li>
          <Link to="login">Log In</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
